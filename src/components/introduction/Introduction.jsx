import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "43.806",
    description: "CRM-PR",
  },
  {
    id: 2,
    title: "33.717",
    description: "RQE",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      {/* Texto e botões */}
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Olá! Prazer, sou
            <span className="text-nowrap shrink-0 inline-block w-full">
              Dr. Jonas Tamanini
            </span>
          </p>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Otorrinolaringologista com foco em um{" "}
            <span className="bg-highlight">
              cuidado humano e individualizado
            </span>
            .<br />
            <br />
            Vamos cuidar juntos do que te faz:
            <br />
            <span className="block ml-4">✔ Respirar melhor</span>
            <span className="block ml-4">✔ Ouvir melhor</span>
            <span className="block ml-4">✔ Viver melhor</span>
            <br />
            Agende sua consulta e cuide da sua saúde com{" "}
            <span className="bg-highlight">confiança e tranquilidade</span>.
          </p>

          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="https://wa.me/5544999730804?text=Olá, gostaria de agendar uma consulta com o Dr. Jonas Tamanini, por favor."
              target="_blank"
            >
              Agendar Consulta
            </a>
          </p>
        </div>

        {/* CRM-PR e RQE */}
        <div className="mx-auto lg:mx-0 relative">
          <div className="flex justify-center lg:justify-start gap-4 mt-10">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Imagem do médico */}
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
