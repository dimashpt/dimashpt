export default function RootPage(): JSX.Element {
  return (
    <div className="content items-center justify-center">
      <div className="flex flex-col">
        <p className="text-sm md:text-base text-muted-foreground">
          Hi There! I&apos;m
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Dimas Pratama
        </h1>
        <h5 className="text-base md:text-2xl mt-2 text-muted-foreground">
          &gt; Front-end developer
        </h5>
      </div>
    </div>
  );
}
