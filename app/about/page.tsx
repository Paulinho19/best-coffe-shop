const About = () => {
  return (
    <section className="flex items-center flex-col justify-center h-[713px]">
      <h1 className="text-orange-800 text-4xl font-bold">Sobre Nós</h1>
      <div className="mt-12 flex flex-col items-center justify-center gap-4 w-[600px]  bg-amber-50 border rounded-2xl p-5">
        <p className=" font-bold text-orange-800 text-2xl text-justify">
          O Café da Tia Rosa serve a comunidade com amor e dedicação há mais de
          20 anos. Conhecido por seu ambiente acolhedor e café fresco, é o lugar
          perfeito para relaxar, se conectar e desfrutar de delícias caseiras.
          Venha experimentar a hospitalidade calorosa da Tia Rosa!
        </p>
      </div>
    </section>
  );
};

export default About;
