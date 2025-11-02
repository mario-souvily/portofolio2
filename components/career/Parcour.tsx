"use client";

type ParcoursProps = {
  id?: string;
  title: string;
  description: string;
  image: string;
  date: string;
  role: string;
  stack?: string[];
  bgColor: string;
};

export const Parcour = (props: ParcoursProps) => {
  const CardInner = (
    <div id={props.id} className={`bg-opacity-0 ${props.bgColor}`}>
      <div className="group rounded overflow-hidden shadow-lg flex flex-row min-h-[200px] hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-primary/30 object-contain transition duration-100 ease-in-out cursor-pointer">
        <div className="overflow-hidden flex-shrink-0 flex items-center">
          <img src={props.image} alt={props.title} className="w-auto h-24 md:h-20 object-contain p-4 transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="px-4 md:px-6 py-4 md:py-8 flex-1 flex flex-col gap-2">
          <div className="font-bold text-lg md:text-xl text-yellow-800">{props.title}</div>
          <p className="text-sm md:text-base text-black transition-colors duration-500">{props.description}</p>
          <p className="text-sm md:text-base text-black transition-colors duration-500">{props.date}</p>
          <p className="text-sm md:text-base text-black transition-colors duration-500">{props.role}</p>

          {props.stack && props.stack.length > 0 && (
            <div id={props.id} className="mt-2 flex flex-wrap gap-2 items-center justify-center">
              {props.stack.map((stack, index) => (
                <span
                  id={props.id}
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 animate-pulse"
                >
                  {stack}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full">
      {CardInner}
    </div>
  );
};