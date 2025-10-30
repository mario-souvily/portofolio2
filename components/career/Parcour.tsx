"use client";

type ParcoursProps = {
  id?: string;
  title: string;
  description: string;
  image: string;
  date: string;
  role: string;
  stack?: string[];
};

export const Parcour = (props: ParcoursProps) => {
  const CardInner = (
    <div id={props.id}>
      <div className="group rounded overflow-hidden shadow-lg bg-blue-500/20 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-primary/30 object-contain transition duration-100 ease-in-out opacity-60 hover:opacity-1000 cursor-pointer">
        <div className="overflow-hidden">
          <img src={props.image} alt={props.title} className="w-full h-20 object-contain p-4 transition-transform duration-500 group-hover:scale-120 " />
        </div>
        <div className="px-6 py-8 w-auto size-40 ">
          <div className="font-bold text-xl text-primary">{props.title}</div>
          <p className="text-base text-muted-foreground transition-colors duration-500 ">{props.description}</p>
        </div>

        {props.stack && props.stack.length > 0 && (
          <div id={props.id} className="mb-4 px-6 pt-4 pb-2 flex flex-wrap gap-2 items-center justify-center">
            {props.stack.map((stack, index) => (
              <span
                id={props.id}
                key={index}
                className="inline-block bg-gray-200 rounded-full px-1 py-1 mb-1 text-sm font-semibold text-gray-700 animate-pulse "
              >
                {stack}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="h-full">
      {CardInner}
    </div>
  );
};