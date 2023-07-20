type CommonProps = {
  children: React.ReactNode;
};

export const H1 = ({ children }: CommonProps) => {
  return (
    <h1
      className="text-3xl font-bold 
                    text-transparent bg-clip-text 
                    bg-gradient-to-r from-teal-500 to-violet-500"
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children }: CommonProps) => {
  return <h2 className="lg:text-5xl text-4xl font-normal">{children}</h2>;
};

export const H3 = ({ children }: CommonProps) => {
  return (
    <h3 className="flex place-content-between text-xl font-medium leading-loose">
      {children}
    </h3>
  );
};
