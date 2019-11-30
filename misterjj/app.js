
new Vue({

    el: "#app",
    data:{ 
        pergunta: '',
        ativado: false,
        oculta : '',
        teclaMagica: ';',
        frases : [
            'Meu grande mister, me responda',
        ],
    },
    methods:{
        capturaTecla(event){
            chave = event.key;
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
            this.pergunta += this.frases[0].substr(this.pergunta.length,1)
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
            
        }
    }


});