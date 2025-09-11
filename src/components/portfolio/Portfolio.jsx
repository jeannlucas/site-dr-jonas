import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/1.png";
import card2 from "../../assets/images/portfolio-images/2.png";
import card3 from "../../assets/images/portfolio-images/3.png";
import card4 from "../../assets/images/portfolio-images/4.png";
import card5 from "../../assets/images/portfolio-images/5.png";
import card6 from "../../assets/images/portfolio-images/6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    title: "Desvio de septo e sinusite",
    // description:
    //   "O desvio de septo ocorre quando a parede que separa as narinas está torta ou desalinhada, dificultando a passagem de ar. Já a sinusite é uma inflamação dos seios da face, geralmente causada por infecções ou alergias. O desvio de septo pode aumentar o risco de sinusite por dificultar a drenagem adequada do muco.",
    link: "https://wa.me/5544999730804?text=Ola, gostaria de agendar uma consulta com o Dr. Jonas Tamanini, por favor.",
  },
  {
    id: 2,
    image: card2,
    title: "Roncos noturnos e apneia do sono",
    // description:
    //   "Os roncos noturnos acontecem devido à vibração dos tecidos da garganta durante a respiração, muitas vezes causados por obstruções nas vias aéreas. Já a apneia do sono é uma condição mais séria, em que a respiração para ou fica muito superficial por alguns segundos durante o sono, afetando a qualidade do descanso e a saúde geral.",
    link: "https://wa.me/5544999730804?text=Ola, gostaria de agendar uma consulta com o Dr. Jonas Tamanini, por favor.",
  },
  {
    id: 3,
    image: card3,
    title: "Amigdalites e cirurgia de amígdalas",
    // description:
    //   "A amigdalite é uma inflamação das amígdalas, geralmente causada por vírus ou bactérias, que provoca dor de garganta, febre e dificuldade para engolir. Quando as infecções são frequentes ou causam complicações, pode ser indicada a cirurgia de remoção das amígdalas, chamada amigdalectomia, para melhorar a qualidade de vida e prevenir novos episódios.",
    link: "https://wa.me/5544999730804?text=Ola, gostaria de agendar uma consulta com o Dr. Jonas Tamanini, por favor.",
  },
  {
    id: 4,
    image: card4,
    title: "Cirurgias de perfuração de tímpano",
    // description:
    //   "A perfuração do tímpano pode causar dor, perda auditiva e infecções frequentes. Em alguns casos, é necessário realizar uma cirurgia chamada timpanoplastia para fechar o orifício e restaurar a audição.",
    link: "https://wa.me/5544999730804?text=Ola, gostaria de agendar uma consulta com o Dr. Jonas Tamanini, por favor.",
  },
  {
    id: 5,
    image: card5,
    title: "Avaliação de perda auditiva e zumbido",
    // description:
    //   "A perda auditiva e o zumbido podem afetar a comunicação e a qualidade de vida. A avaliação especializada identifica a causa e orienta tratamentos para melhorar a audição e reduzir os sintomas.",
    link: "https://wa.me/5544999730804?text=Ola, gostaria de agendar uma consulta com o Dr. Jonas Tamanini, por favor.",
  },
  {
    id: 6,
    image: card6,
    title: "Tratamento de otites",
    // description:
    //   "As otites são infecções ou inflamações do ouvido que causam dor e desconforto. O tratamento adequado, que pode incluir medicamentos ou cuidados locais, ajuda a aliviar os sintomas e prevenir complicações.",
    link: "https://wa.me/5544999730804?text=Ola, gostaria de agendar uma consulta com o Dr. Jonas Tamanini, por favor.",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Áreas de Atuação</p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
