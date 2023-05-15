type TTown = {
  title: string;
};

type TTypeOfWork = {
  title: string;
};

export type TJobsDate = {
  id: number;
  profession: string;
  firm_name: string;
  town: TTown;
  type_of_work: TTypeOfWork;
  payment_from: number;
  payment_to: number;
  currency: string;
  vacancyRichText?: string;
};

export type TData = {
  objects: TJobsDate;
  total: number;
};
