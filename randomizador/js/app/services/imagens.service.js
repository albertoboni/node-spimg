angular
    .module('app')
    .service('imagens', function($http) {
        this.lista = [];

        this.template = {
            width: 568,
            height: 500,
            steps: 5,
            stepHeightMax: 150,
            stepHeightMin: 20,
            entropy: 50,
        };



        this.steps = [];

        this.setFilter = function(chave, nome, min, max, valor, unidade, descricao) {
            this.template[chave] = {
                nome: nome,
                min: min,
                max: max,
                valor: valor,
                unidade: unidade,
                descricao: descricao
            };
            return this;
        };

        this.setFilter('width', 'Largura', 1, 1000, 568, 'px', 'Largura total do painel')
            .setFilter('height', 'Altura', 1, 2000, 500, 'px', 'Altura total do painel')
            .setFilter('steps', 'Faixas', 1, 30, 5, '', 'Total de faixas no painel')
            .setFilter('stepHeightMax', 'Max Altura Faixa', 1, 500, 150, 'px', 'Altura máxima de uma faixa')
            .setFilter('stepHeightMin', 'Min Altura Faixa', 1, 500, 20, 'px', 'Altura mínima de uma faixa')
            .setFilter('entropy', 'Entropia', 1, 30, 5, '', 'Fator de entropia para variação da altura da faixa')


        this.carregar = function() {
            var parent = this;
            return $http.get('/image-list.php').then(function(response){
                parent.lista = response.data.imagens;

                return response;
            })
        };

        function Step(width, height, src) {
            this.height = height;
            this.width = width;
            this.src = src;

            this.getPath = function() {
                var str = "";

                for (var key in this) {
                    if (typeof this[key] == 'function'){
                        continue;
                    }

                    if (str != "") {
                        str += "&";
                    }
                    str += key + "=" + encodeURIComponent(this[key]);
                }

                return 'imagem.php?' + str;
            }
        }

        this.getRandomPath = function() {
            return this.lista[Math.floor(Math.random() * this.lista.length)];
        };

        this.imgSrc = function(height) {
            var files     = Randomizer.files;
            var path =  'imagem.php' +
                        '?w=' + this.template.width +
                        '&h=' + height +
                        '&src=' + this.lista[Math.floor(Math.random() * this.lista.length)];

            return path;
        };

        this.reset = function() {
            this.steps = [];
        };

        this.getStepHeight = function() {
            var height =  Math.floor(
                Math.random() * this.template.stepHeightMax.valor
            );

            if (height < this.template.stepHeightMin.valor) {
                height = this.template.stepHeightMin.valor;
            }

            if (height > this.template.stepHeightMax.valor) {
                height = this.template.stepHeightMax.valor;
            }

            return height;
        };

        this.atualizar = function(template) {
            var max = this.template.height.valor,
                min = this.template.stepHeightMin.valor,
                multiplicador = this.template.stepHeightMax.valor;

            if (template) {
                for(i in template) {
                    this.template[i] = angular.copy(template[i]);
                }
            }

            this.reset();

            while(this.steps.length < this.template.steps.valor) {
                //this.steps.push(this.imgSrc(this.getStepHeight()));
                this.steps.push(new Step(
                    this.template.width.valor,
                    this.getStepHeight(),
                    this.getRandomPath()
                ));
            }

            var stepsHeight = this.getTotalStepsHeight(),
                diffStep = Math.round((this.template.height.valor - stepsHeight) / this.steps.length);

            for (i in this.steps) {
                this.steps[i].height += diffStep;
            }

            // padding de arredondamento
            if (this.getTotalStepsHeight() != this.template.height.valor) {;
                this.steps[0].height += this.template.height.valor - this.getTotalStepsHeight();
            }
        };

        this.getTotalStepsHeight = function () {
            return this.steps
                .map(function(step) {
                    return step.height;
                })
                .reduce(function(total, step) {
                return total + step;
            })
        };


    });