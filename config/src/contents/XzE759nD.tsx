import { ArrowSquareOut, Briefcase, GithubLogo, MapPin } from "phosphor-react";
import React from "react";

export function X5y36() {
  return (
    <div className="w-full absolute top-40 left-0">
      <section className="_4876ESXl grid gap-5 z-10 w-fit m-auto rounded-lg px-5 py-3.5 sm:flex sm:justify-center lg:gap-12 lg:px-8 lg:py-5">
        <img
          className="w-full max-w-xs min-wid-16 m-auto rounded-lg sm:w-56 sm:mx-0"
          src="./config/public/image/me.jpg"
          alt="Foto de Henry Rodrigues"
          loading="lazy"
        />
        <span className="grid gap-4 m-auto max-w-xs min-wid-16 sm:m-0 sm:my-5 sm:h-fit sm:max-w-sm sm:gap-7 lg:max-w-lg">
          <div className="grid gap-3 sm:gap-4">
            <span className="grid text-center sm:flex sm:justify-between">
              <h2 className="_hrx8E0I8 text-center sx:text-xl">Henry Rodrigues</h2>
              <a className="_mw4j9OK5 flex justify-center items-center gap-1">
                <p>Github</p>
                <ArrowSquareOut weight="bold" />
              </a>
            </span>
            <p className="_7O7a88Vj text-justify text-sm sm:text-base">
              Desenvolvedor front-end que ama ReactJS, TailwindCSS e TypeScript.
            </p>
          </div>
          <div className="grid gap-2 items-center justfy-between sm:grid-cols-2 lg:flex lg:justify-between">
            <span className="_7O7a88Vj flex items-center gap-1.5">
              <GithubLogo className="_Y1rrP236" />
              <p>hhennryy</p>
            </span>
            <span className="_7O7a88Vj flex items-center gap-1.5">
              <Briefcase className="_Y1rrP236" />
              <p title="Setor de cerimonial da Camara Municipal de Porto Alegre">
                Cerimonial - CMPA
              </p>
            </span>
            <span className="_7O7a88Vj flex items-center gap-1.5">
              <MapPin className="_Y1rrP236" />
              <p>Alvorada - RS</p>
            </span>
          </div>
        </span>
      </section>
    </div>
  );
}
