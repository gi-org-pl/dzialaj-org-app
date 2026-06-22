import { type FaqItem } from "@/components/home/FaqAccordion/FaqAccordion.types.ts";

export default function FaqItem({
  id,
  question,
  answerPrefix,
  answerBody,
}: FaqItem) {
  return (
    <div key={id} className="w-full text-gi-dark-gray">
      <div className="flex items-center justify-center border border-solid border-gi-light-gray-dark rounded-t-3xl">
        <h3 className="w-full bg-white text-gi-dark-primary text-left text-xl font-bold p-4 rounded-t-3xl">
          {question}
        </h3>
      </div>
      <div className="flex flex-col justify-center p-4 border-b border-x border-solid border-gi-light-gray-dark rounded-b-3xl">
        <p className="text-xl text-gi-dark-primary">
          <span className="text-gi-blue font-bold">{answerPrefix}</span>{" "}
          {answerBody}
        </p>
      </div>
    </div>
  );
}
