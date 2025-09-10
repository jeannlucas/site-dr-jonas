import Marquee from "react-fast-marquee";
const commonSVGClass = "h-5 sm:h-8 md:h-10";

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Nossa Localização</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          Pró Otorrino Maringá
        </p>
      </div>

      <Marquee pauseOnHover={true} speed={100}></Marquee>

      {/* MAPA */}
      <div className="w-full mt-10">
        <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.9091283148573!2d-51.952422087461244!3d-23.427649556608607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd726738ba009%3A0xcb9815d785f496f5!2sPr%C3%B3%20Otorrino%20Maring%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1757544743090!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
