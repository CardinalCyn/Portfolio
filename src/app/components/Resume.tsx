export default function Resume() {
  const workExperience: Experience[] = [
    {
      title: "Software Developer at Creative Planning",
      time: "August 2023 - Present",
      points: [
        "Designed and implemented a dynamic dashboard utilizing Next.js, showcasing key performance indicators (KPIs), various tables, and essential metrics to clients",
        "Developed USPS address verification integration to validate and recommend updated addresses in real-time, improving data accuracy and reducing errors in customer and order information",
        "Developed a SQL-based query form to search for and display items, enabling order creation from selected results, streamlining the item lookup and order process",
      ],
    },
  ];

  return (
    <section id="resume" className="py-16">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
          {workExperience.map((ele) => {
            return (
              <div className="mb-4" key={ele.title}>
                <h4 className="text-lg font-medium">{ele.time}</h4>
                <p className="text-sm text-muted-foreground">{ele.time}</p>
                <ul className="list-disc list-inside mt-2">
                  {ele.points.map((point) => {
                    return <li key={point}>{point}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <div>
            <h4 className="text-lg font-medium">
              Bachelor of Science in Computer Science
            </h4>
            <p className="text-sm text-muted-foreground">
              University of Texas at Dallas
            </p>
          </div>
        </div>
      </div>
      <a
        href="/szresume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-primary text-primary-foreground px-4 py-2 rounded"
      >
        Download Full Resume
      </a>
    </section>
  );
}

type Experience = {
  title: string;
  time: string;
  points: string[];
};
