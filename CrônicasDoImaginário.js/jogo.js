var progressoDeVida = 1
var checkpointFase1 = false
var checkpointFase2 = false
var checkpointFase3 = false
let conquista = 0
let saude = 1
let forca = 1
let habilidade = 1
let inventario = ["kimono", "faixa", "água", "planilha de treino"]

alert("Seja bem-vindo(a) ao jogo Crônicas do imaginário!")
alert("Neste jogo, você é Nigara Shaheen, uma atleta de judô afegã. Você fará escolhas que afetarão diretamente o final do jogo. O objetivo principal do jogo é fazer uma boa campanha como atleta e se classificar para as olimpíadas. ")

primeiraFaseComeço();

function primeiraFaseComeço(){
    while(!checkpointFase1){

        alert("Jalalabad, Afeganistão - 24 de dezembro de 1993")
        alert("Narração: Nesta noite fria, na véspera de Natal, um casal está colocando seus pertences mais importantes e alimentos em mochilas para fugir da guerra. Junto dos dois está a filha de seis meses do casal. Estão atravessando a fronteira a pé para o Paquistão em busca de condições melhores de vida. Levará dois dias e duas noites para chegarem ao destino. Com os corações aflitos, partem para uma nova jornada incerta.")
        
        alert("Peshawar, Paquistão - 10 de outubro de 1998")
        alert("Narração: Cinco anos se passaram desde que chegaram a Peshawar. A vida é difícil, você tem apenas 5 anos mas pelo seu pequeno entendimento seus pais fazem o melhor que podem. Você começou a se interessar por artes marciais.")
        alert("Você teve uma aula de Karatê na sua casa por meia hora e seu interesse pelas artes marciais aumentou.")

        alert("Peshawar, Paquistão - 23 de junho de 2004")
        alert("Narração: Seis anos se passaram e seu treinador sugeriu que você começasse a treinar judô, você começou a treinar e amou praticar, se sentiu mais confiante e se apaixonou pela arte marcial.")

        let decisao = Number(prompt("Escolha uma ação:\n1 - Tomar água, se dedicar aos treinos e melhorar a sua alimentação.\n2 - Treinar somente uma vez por semana e às vezes faltar aos treinos.\n3 - Pular os treinos e gastar seu tempo com outras atividades.\n4 - Treinar com um novo parceiro de treino."))

        switch (decisao) {
            case 1:
                alert("Você melhorou seu desempenho e se sente mais leve e disposta. Seu treinador ficou orgulhoso e te presenteou com um kimono, uma faixa, uma garrafa de água e uma planilha de treino personalizados, você ficou muito feliz! (Você ganhou pontos de habilidade, de saúde, de força e de Progresso de vida)")
                habilidade += 1
                forca += 1
                progressoDeVida += 1
                saude += 1
                break

            case 2:
                alert("Você se sente sem disposição e não está tendo um bom desempenho. (Você perdeu pontos de progresso de vida, de saúde e de força)")
                saude -= 0.5
                forca -= 1
                progressoDeVida -= 1
                break

            case 3:
                alert("Você não está focada e sua performance está comprometida. (Você perdeu pontos de progresso de vida, de saúde e de força)")
                saude -= 0.25
                forca -= 0.5
                progressoDeVida -= 0.25
                break

            case 4:
                alert("Treinar com um novo parceiro deixou seu treinador chateado, mas trouxe novos desafios e aprendizado. (Você ganhou pontos de habilidade e pontos de Progresso de vida)")
                habilidade += 0.5
                progressoDeVida += 0.5
                break

            default:
                alert("Escolha inválida. Tente novamente.")
                break
        }

        let continuar = true
         while (continuar) {
        let pausa = Number(prompt("Escolha o que fazer a seguir:\n1 - Conferir seu kimono.\n2 - Conferir sua faixa atual.\n3 - Tomar água.\n4 - Verificar a planilha de treinos.\n5 - Continuar a história."))

         switch (pausa) {
        case 1:
            alert("Você está usando um kimono de treino de judô. Ele está limpo e pronto para o próximo treino.")
            break
        case 2:
            alert("Sua faixa atual é a faixa marrom. Você tem se esforçado muito para avançar.")
            break
        case 3:
            alert("Você toma um pouco de água e se sente mais refrescada e hidratada. (Você aumentou seus pontos de saúde.)")
            saude += 0.1
            break
        case 4:
            alert("Sua planilha de treinos mostra um cronograma bem equilibrado com treinos de técnica e força. Você verificou a planilha e fez o treino corretamente. (Você ganhou pontos de habilidade.)")
            habilidade += 0.25
            break
        case 5:
            alert("Peshawar, Paquistão - 5 de abril de 2007")
            let trocaFase = Number(prompt("Narração: Treinar judô se tornou uma parte essencial da sua vida. O judô não é apenas um esporte para você, mas sim uma maneira de enfrentar seus medos. Seus treinadores e colegas se tornaram uma segunda família. Você ainda tem pesadelos com o dia que um homem mais velho agrediu a você e a sua irmã. Ele gritou com vocês e te empurrou para o chão. Você queria se defender, mas não sabia como. Você está determinada a seguir em frente, digite 1 para continuar."))

            if (trocaFase === 1) {
                if (progressoDeVida >= 2) {
                    alert("Parabéns! Você tem Progresso de vida suficiente para avançar de fase.")
                    checkpointFase1 = true
                    continuar = false 
                } else {
                    alert("Que pena, você fez escolhas erradas e não tem progresso de vida suficiente para avançar de fase. Tente novamente!")
                    continuar = false 
                }
            }
            break
        default:
            alert("Escolha inválida. Tente novamente.")
            break
     }
    }
  }
}

segundaFaseIntensiva();

function segundaFaseIntensiva() {
    while(!checkpointFase2){

        alert("Peshawar, Paquistão - 12 de setembro de 2008")
        alert("Narração: Seu treinador disse para você que você tem potencial para competir em níveis mais altos e te graduou, agora você é faixa preta. Foi um dia emocionante, mas também um dia de reflexão. Você está pensativa em seguir em frente, apesar das dificuldades que enfrenta em um esporte predominantemente masculino em sua cultura.")
        
        let decisao = Number(prompt("1- Você pode seguir em frente. 2- Você pode dar uma pausa"))
        
        if (decisao === 1) {
            alert("Seu treinador e colegas do judô continuam te motivando, você ficou muito feliz. (Você ganhou pontos de habilidade, sua primeira conquista e pontos de Progresso de vida.)")
            conquista += 1
            habilidade += 0.5
            progressoDeVida += 1
        } else if (decisao === 2) {
            alert("Seu treinador fica decepcionado pela grande oportunidade que você está jogando fora após quatro anos de dedicação e esforço.")
            habilidade -= 0.5
            progressoDeVida -= 0.25
        }

        alert("Peshawar, Paquistão - 17 de novembro de 2008")
        alert("Você seguiu em frente e sua paixão pelo judô só cresce. Você participou da sua primeira competição oficial hoje e ganhou uma medalha. Foi uma experiência incrível que te fez perceber que quer continuar seguindo esse sonho. (Você adquiriu mais uma conquista e aumentou pontos de progresso de vida)")
            
            conquista += 1
            progressoDeVida += 1

        let escolha = Number(("1 - Você pode continuar se dedicando. 2 - Você pode dar uma pausa dando a desculpa de que está comemorando a sua medalha."))

        if (escolha === 1){
            progressoDeVida += 0.25
            habilidade += 1
            forca += 0.25
        alert("Você continuou se dedicando e seus pontos de progresso de vida e habilidade aumentam.")
        } else if (escolha === 2){
            progressoDeVida -= 0.25
            habilidade -= 0.1
        alert("Você relaxou e isso te custou perdas de pontos na habilidade e progresso de vida.")
        }

        alert("Cabul, Afeganistão - 14 de maio de 2014")
        alert("Você pode retornar ao Afeganistão para estudar ciência política e administração pública na Universidade Americana em Cabul.")
        
        let opcao = Number(prompt("1- Voltar para estudar. 2- Deixar para lá."))

        if (opcao === 1 ){
        alert("Você voltou apesar do medo das guerras, está disposta a adquirir novos conhecimentos e aprimorar-se como pessoa. (Você ganhou pontos de habilidade e pontos de progresso de vida.)")
            progressoDeVida += 1
            habilidade += 1
            conquista += 1
        } else if (opcao === 2) {
        alert("Você preferiu não voltar e perdeu uma oportunidade. (Você perdeu pontos de habilidade e pontos de progresso de vida.)")
            progressoDeVida -= 0.25
            habilidade -= 0.5
        }

        alert("Cabul, Afeganistão - 27 de julho de 2014")
        alert("Você saiu de férias, são apenas uma pausa nos estudos mas você pode treinar.")

        let prioridade = Number(prompt("1- Aproveitar as férias para treinar, 2- Deixar para outra hora."))

        if (prioridade === 1){
            progressoDeVida += 0.5
            habilidade += 0.1
            forca += 0.5
            saude += 0.25
        alert("Você ganhou pontos de progresso de vida, habilidade, força e saúde, ")
        } else if (prioridade === 2){
            forca -= 0.5
        alert("Você perdeu pontos de força por ter deixado o treino para outra hora.")
        }

        let continuar = true
  while (continuar) {
    let pausa = Number(prompt("Escolha o que fazer a seguir:\n1 - Conferir seu kimono.\n2 - Conferir sua faixa atual.\n3 - Tomar água.\n4 - Verificar a planilha de treinos.\n5 - Continuar a história."))

    switch (pausa) {
        case 1:
            alert("Você está usando um kimono de treino de judô. Ele está limpo e pronto para o próximo treino.")
            break
        case 2:
            alert("Sua faixa atual é a faixa preta. Você tem se esforçado muito para avançar.")
            break
        case 3:
            alert("Você toma um pouco de água e se sente mais refrescada e hidratada. (Você aumentou seus pontos de saúde.)")
            saude += 0.1
            break
        case 4:
            alert("Sua planilha de treinos mostra um cronograma bem equilibrado com treinos de técnica e força. Você verificou a planilha e fez o treino corretamente. (Você ganhou pontos de habilidade.)")
            habilidade += 0.25
            break
        case 5:
            alert("Rússia - 1 de março de 2018")
            let trocaFase = Number(prompt("Narração: Você se mudou para adquirir o mestrado, só que dessa vez para a Rússia, mestrado em comércio internacional e empreendedorismo. Em contrapartida você não conseguiu encontrar um parceiro para treinar, digite 1 para continuar."))

            if (trocaFase === 1) {
                if (progressoDeVida >= 2) {
                    alert("Parabéns! Você tem Progresso de vida suficiente para avançar de fase.")
                    checkpointFase2 = true
                    continuar = false 
                } else {
                    alert("Que pena, você fez escolhas erradas e não tem progresso de vida suficiente para avançar de fase. Tente novamente!")
                    continuar = false 
                }
            }
            break
        default:
            alert("Escolha inválida. Tente novamente.")
            break
     }
    }
  }
}

terceiraFasePreOlimpiada("normal");

function terceiraFasePreOlimpiada(dificuldade) {
    let fatorDificuldade = 1
    if (dificuldade === "fácil") {
        fatorDificuldade = 0.5
    } else if (dificuldade === "difícil") {
        fatorDificuldade = 1.5
    }

    while (!checkpointFase3) {
        alert("Narração: Você se mudou para adquirir o mestrado, só que dessa vez para a Rússia, mestrado em comércio internacional e empreendedorismo. Em contrapartida, você não conseguiu encontrar um parceiro para treinar. (Você perdeu pontos de força e habilidade por treinar sozinha, mas aumentou seus pontos de progresso de vida e saúde.)")
        progressoDeVida += 1 * fatorDificuldade
        forca -= 0.15 * fatorDificuldade
        habilidade -= 0.15 * fatorDificuldade
        saude -= 0.1 * fatorDificuldade

        alert("Rússia - 14 novembro de 2018")
        alert("Você sente que está passando pelo pior ano da sua carreira.")

        alert("Rússia - 15 de junho de 2019")
        alert("Você foi abordada por um membro da Federação Internacional de Judô, que sugeriu que você fizesse um teste para a Equipe Olímpica de Refugiados, você ficou muito feliz. (Você adquiriu mais uma conquista e ganhou pontos de progresso de vida.)")
        progressoDeVida += 1 * fatorDificuldade
        conquista += 1

        alert("Rússia - 1 de julho de 2019")
        alert("Você se classificou para as Olimpíadas de Tóquio 2020, está entusiasmada e orgulhosa por toda a sua caminhada até ser classificada para a sua primeira olimpíada, tudo valeu a pena. (Você adquiriu mais uma conquista e ganhou pontos de progresso de vida.)")
        progressoDeVida += 1 * fatorDificuldade
        conquista += 1

        alert("Você pode retornar ao Paquistão para treinar com o seu treinador, é uma ótima ideia se preparar.")

        let decisao = Number(prompt("1- Você pode voltar para treinar. 2- Você pode deixar pra outra hora."))
        
        if (decisao === 1) {
            alert("Você volta ao Paquistão, treina bastante e se sente confiante para os jogos olímpicos. (Você ganhou pontos de habilidade, de força e pontos de progresso de vida.)")
            habilidade += 0.5 * fatorDificuldade
            forca += 0.1 * fatorDificuldade
            progressoDeVida += 1 * fatorDificuldade
        } else if (decisao === 2) {
            alert("Seu treinador fica irritado com você, porque essa falta de preparo vai te fazer falta na frente. (Você perdeu pontos de habilidade, força e progresso de vida.)")
            habilidade -= 0.5 * fatorDificuldade
            progressoDeVida -= 0.25 * fatorDificuldade
            forca -= 0.25 * fatorDificuldade
        }

        alert("Tóquio, Japão - 27 de junho de 2021")
        alert("Uma lesão grave no ombro te tirou da competição, você está triste, decepcionada pelo seu desempenho e por esta lesão que não te permitirá ser atleta por um tempo. Em compensação, você terminou seus estudos na Rússia. A situação no Afeganistão piorou drasticamente, você está presa. Você retornou ao Paquistão e está com medo da sua segurança e está sendo criticada por não usar o lenço durante os jogos. (Você perdeu pontos de progresso de vida e pontos de saúde.)")
        progressoDeVida -= 0.25 * fatorDificuldade
        saude -= 0.50 * fatorDificuldade

        alert("Rússia - 19 de junho de 2022")
        alert("Você está entusiasmada, surgiu a oportunidade de viver e treinar no Canadá, com a ajuda da Fundação Olímpica para Refugiados e da Agência das Nações Unidas para Refugiados. Você também foi aceita para estudar em Toronto para uma pós-graduação em desenvolvimento internacional. (Você aumentou seu progresso de vida e suas habilidades.)")
        progressoDeVida += 2 * fatorDificuldade
        conquista += 2

        alert("Toronto, Canadá - 20 de setembro de 2022")
        alert("Após 3 países em busca de estabilidade, você finalmente pode aproveitar as oportunidades que teve, nunca esteve tão feliz. (Você aumentou seus pontos de progresso de vida e adquiriu mais uma conquista.)")
        progressoDeVida += 1 * fatorDificuldade
        conquista += 1

        alert("Seu treinador disse que está indo para o Canadá para que possa te treinar para uma possível próxima Olimpíada")
        alert("Você não tem muito dinheiro, mas para agradecer por tudo, paga as passagens dele, era o mínimo que você poderia fazer.")

        alert("Seu treinador cria uma nova planilha de treino, ele não te deu a opção de desistir ou fazer o mínimo.")
        alert("Ele te deu duas opções: ")

        let escolha = Number(prompt("1- Você dá o seu máximo e vive os dois anos seguintes com muitas regras, 2- Você desiste de tudo e no futuro se arrepende."))

        if (escolha === 1) {
            alert("Você e seu treinador passam os dois anos seguintes de maneira intensa com treinos, dietas e metas atingidas. (Você aumentou seus pontos de progresso de vida, saúde, força e habilidade.)")
            saude += 5 * fatorDificuldade
            habilidade += 2 * fatorDificuldade
            forca += 1.5 * fatorDificuldade
            progressoDeVida += 1 * fatorDificuldade
        } else if (escolha === 2) {
            alert("Você se arrepende e deseja poder voltar no passado e fazer diferente.")
        }

        alert("Toronto, Canadá - 9 de julho de 2024")
        alert("O COI aceitou a sua participação e de mais três atletas afegãs nas Olimpíadas de Paris 2024, você está muito feliz por poder participar de uma olimpíada mais uma vez, por poder ter outra oportunidade.")
        progressoDeVida += 1 * fatorDificuldade

        alert("Você pode fazer sua última semana de treino!")

        let prioridade = Number(prompt("1- Você escolhe fazer a última semana de treino para se sentir mais preparada e confiante. 2- Você está confiante e acha que tudo que fez está ótimo."))

        if (prioridade === 1) {
            alert("Você fez um intensivão e se sente mais confiante.")
            habilidade += 3 * fatorDificuldade
            forca += 4 * fatorDificuldade
            progressoDeVida += 2 * fatorDificuldade
        } else if (prioridade === 2) {
            alert("Ok, siga em frente")
        }

        alert("O início das Olimpíadas chegou, você está muito animada!")
        alert("Você embarca junto de seu treinador e vocês chegam em Paris esperançosos.")

        alert("Paris, França - 26 de julho de 2024")
        alert("Você está na Vila Olímpica em Paris, pronta para sua estreia nas Olimpíadas de 2024. Você sente um misto de nervosismo e felicidade. Cada passo que você deu trouxe até Paris. O apoio da sua família, treinador e amigos foi essencial. Você sabe que, independentemente do resultado, já é uma vencedora por ter chegado até aqui mesmo com tantas adversidades. Seu coração está cheio de gratidão e orgulho.")

        alert("Paris, França - 27 de julho de 2024")
        alert("A competição de Judô começa hoje.")

        if (habilidade >= 1 && forca >= 1) {
            alert("Você ganhou e avançou de fase, está muito feliz, todo o esforço valeu a pena, você conquistou sua primeira vitória em jogos olímpicos. (Você ganhou pontos de progresso de vida e adquiriu mais uma conquista.)")
            conquista += 1
            progressoDeVida += 1 * fatorDificuldade
        } else {
            alert("Você está fora, eu sinto muito! Tente novamente.")
            break;
        }

        if (habilidade >= 2 && forca >= 2) {
            alert("Você está nas quartas de final, parabéns! (Você adquiriu mais uma conquista e mais pontos de progresso de vida.)");
            conquista += 1
            progressoDeVida += 1 * fatorDificuldade
        } else {
            alert("Você está fora, eu sinto muito! Tente novamente.")
            break;
        }

        if (habilidade >= 3 && forca >= 3) {
            alert("Você está nas semifinais, parabéns! Você se sente nervosa e tem medo de falhar na final, seu treinador está fazendo de tudo para que você se sinta melhor. (Você adquiriu mais uma conquista e mais pontos de progresso de vida.)")
            conquista += 1;
            progressoDeVida += 1 * fatorDificuldade
        } else {
            alert("Você está fora, eu sinto muito! Tente novamente.")
            break;
        }

        if (habilidade >= 4 && forca >= 4) {
            alert("Você está na final, parabéns! (Você adquiriu mais uma conquista e mais pontos de progresso de vida.)")
            conquista += 1;
            progressoDeVida += 1 * fatorDificuldade
        } else {
            alert("Você está fora, eu sinto muito! Tente novamente.")
            break;
        } 

        if (habilidade >= 6 && forca >= 6) {
            alert("VOCÊ É OURO, MEUS PARABÉNS!")
            conquista += 1;
            progressoDeVida += 1 * fatorDificuldade
        } else {
            alert("Você está fora, eu sinto muito! Tente novamente.")
            break;
        }

        let novamente = Number(prompt("Deseja jogar novamente? 1- Sim 2- Não"))

        if (novamente === 1) {
            checkpointFase3 = false
            continuar = false
        } else if (novamente === 2) {
            checkpointFase3 = true
            continuar = false
        } else {
            alert("Opção inválida, por favor escolha 1 ou 2.")
        }
    }
}