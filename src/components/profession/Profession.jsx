import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Como agendar uma consulta?",
    description:
      "Você pode agendar sua consulta rapidamente pelo botão “Agendar Consulta” no site ou entrando em contato direto pelo WhatsApp. Garantimos atendimento personalizado e rápido.",
  },
  {
    id: 2,
    title: "Quais tratamentos estão disponíveis?",
    description:
      "Oferecemos tratamento completo para nariz, ouvido e garganta, incluindo prevenção e cuidado de otites, rinites, perda auditiva, roncos, sinusites, disfonias e muito mais.",
  },
  {
    id: 3,
    title: "O atendimento é humanizado?",
    description:
      "Sim! Todo atendimento é focado em um cuidado humano e individualizado, garantindo que cada paciente se sinta acolhido e seguro.",
  },
  {
    id: 4,
    title: "Dr. Jonas é especialista?",
    description:
      "Dr. Jonas Tamanini é médico otorrinolaringologista formado pela UEM, com residência e fellowship em Otologia e Otoneurologia pela UNICAMP, sempre atualizado e membro da ABORL-CCF.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="faq"
    >
      {/* Texto introdutório */}
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">FAQ</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Aqui você encontra respostas para as perguntas mais frequentes sobre
            nossos atendimentos e serviços.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Nosso objetivo é oferecer informações claras e um atendimento
            seguro, humanizado e de confiança.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Agendar Consulta
        </a>
      </div>

      {/* Lista de FAQ */}
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
