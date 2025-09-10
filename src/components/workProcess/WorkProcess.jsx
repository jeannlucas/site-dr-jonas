import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Atendimento com atenção e carinho",
    description: "Atendimento personalizado, com escuta ativa e acolhimento.",
    svgPath: "M4 4H28V8H4V4ZM4 12H28V16H4V12ZM4 20H20V24H4V20Z",
  },
  {
    id: 2,
    title: "Ambiente moderno e acolhedor",
    description:
      "Estrutura moderna e acolhedora na Pró-Otorrino, pensada para sua segurança e conforto.",
    svgPath:
      "M4 28H28V4H4V28ZM8 8H12V12H8V8ZM16 8H20V12H16V8ZM8 16H12V20H8V16ZM16 16H20V20H16V16Z",
  },
  {
    id: 3,
    title: "Cuidado atualizado e de confiança",
    description:
      "Utilização de técnicas atualizadas e evidências científicas para um cuidado eficaz.",
    svgPath: "M14 2L2 12V22H26V12L14 2ZM14 6L22 12H6L14 6ZM12 14H16V20H12V14Z",
  },
  {
    id: 4,
    title: "Tratamento completo para nariz, ouvido e garganta",
    description:
      "Atuação focada na prevenção e no tratamento completo de otites, rinites, perda auditiva, roncos, sinusites, disfonias e muito mais.",
    svgPath: "M4 28H28V4H4V28ZM8 8H20V20H8V8ZM12 12H16V16H12V12Z",
  },
];

const WorkProcess = () => {
  const workStepData = [
    {
      id: 1,
      title: "Atendimento com atenção e carinho",
      description: "Atendimento personalizado, com escuta ativa e acolhimento.",
      svgPath: "M4 4H28V8H4V4ZM4 12H28V16H4V12ZM4 20H20V24H4V20Z", // blocos representando diálogo/escuta
    },
    {
      id: 2,
      title: "Ambiente moderno e acolhedor",
      description:
        "Estrutura moderna e acolhedora na Pró-Otorrino, pensada para sua segurança e conforto.",
      svgPath:
        "M4 28H28V4H4V28ZM8 8H12V12H8V8ZM16 8H20V12H16V8ZM8 16H12V20H8V16ZM16 16H20V20H16V16Z", // quadrados sobrepostos
    },
    {
      id: 3,
      title: "Cuidado atualizado e de confiança",
      description:
        "Utilização de técnicas atualizadas e evidências científicas para um cuidado eficaz.",
      svgPath:
        "M14 2L2 12V22H26V12L14 2ZM14 6L22 12H6L14 6ZM12 14H16V20H12V14Z", // escudo geométrico
    },
    {
      id: 4,
      title: "Tratamento completo para nariz, ouvido e garganta",
      description:
        "Atuação focada na prevenção e no tratamento completo de otites, rinites, perda auditiva, roncos, sinusites, disfonias e muito mais.",
      svgPath: "M4 28H28V4H4V28ZM8 8H20V20H8V8ZM12 12H16V16H12V12Z", // formas interligadas
    },
  ];

  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      {/* Texto introdutório */}
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Nosso Processo</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Cada atendimento na Pró-Otorrino é pensado para você. Com atenção,
          cuidado humano e técnicas atualizadas, seguimos um processo claro e
          eficiente para cuidar da sua saúde.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Do acolhimento à prevenção e tratamento completo de nariz, ouvido e
          garganta, cada etapa é planejada para oferecer segurança, confiança e
          resultados que fazem diferença na sua vida.
        </p>
      </div>

      {/* Etapas do processo */}
      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
