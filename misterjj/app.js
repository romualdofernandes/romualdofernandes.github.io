
new Vue({

    el: "#app",
    data:{ 
        pergunta: '',
        ativado: false,
        oculta : '',
        resposta: '',
        teclaMagica: ';',
        frase : 0,
        frases : [
            'Meu grande mister, me responda',
            'Mister meu grande amigo,',
            'Mister, me responda por favor',
        ],
        respostas : [
            'Não irei responder',
            'Não gostei dessa pergunta',
            'Faça outra pergunta',
            'Não digo',
            'Minha sabedoria está longe do seu alcance!',
            'Você não está preparado para saber a verdade!'
        ],
    },
    methods:{
        capturaTecla(event){
            chave = event.key;

            if (this.pergunta == ""){
                this.resposta = '';
                this.frase = Math.floor(Math.random() * ( this.frases.length ));
            }

            if(this.pressionarTeclaMagica(chave)){
                this.ativado = !this.ativado
                this.enviarLetraFrases();
                return true;
            }

            if (this.ativado){
                this.enviarLetraFrases();
                this.guardaPalavraOculta(chave);
            }                           
        },
        pressionarTeclaMagica(chave){   
            if (chave == this.teclaMagica  && chave.length==1){
                return true;
            }
            return false;
        },
        enviarLetraFrases(){
            if(chave.length==1){
                this.pergunta += this.frases[this.frase].substr(this.pergunta.length,1)
                event.preventDefault();
            }

        },
        guardaPalavraOculta(chave){
            if(chave=="Backspace"){
                this.oculta = this.oculta.substr(0,this.oculta.length-1)
            }
            if(chave.length==1){
                this.oculta += chave;
            }
            
        },
        exibeResposta(){
            if (this.oculta==""){
                this.resposta = this.respostas[Math.floor(Math.random() * ( this.respostas.length ))];
            }
            else{
                this.resposta = this.oculta;
            }

            this.oculta = '';
            this.pergunta = '';

        }
    }


});