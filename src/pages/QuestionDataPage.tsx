import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  LineChart,
  Line,
} from "recharts";

type TQuestionData = {
  name: string;
  overallSatisfaction: number;
  likelyToRecommend: number;
  satisfactionWithCustomerService: number;
  easyOfUseOfProduct: number;
  valueForMoney: number;
  issuesEncountered: number;
  supportResolutionTime: number;
  likelihoodOfPurchaseAgain: number;
};

const data: TQuestionData[] = [
  {
    name: "Week 1",
    overallSatisfaction: 4.1,
    likelyToRecommend: 8.5,
    satisfactionWithCustomerService: 85,
    easyOfUseOfProduct: 4.3,
    valueForMoney: 4.0,
    issuesEncountered: 15,
    supportResolutionTime: 3.8,
    likelihoodOfPurchaseAgain: 8.1,
  },
  {
    name: "Week 2",
    overallSatisfaction: 4.2,
    likelyToRecommend: 8.7,
    satisfactionWithCustomerService: 88,
    easyOfUseOfProduct: 4.4,
    valueForMoney: 4.1,
    issuesEncountered: 12,
    supportResolutionTime: 4.0,
    likelihoodOfPurchaseAgain: 8.3,
  },
  {
    name: "Week 3",
    overallSatisfaction: 4.3,
    likelyToRecommend: 8.9,
    satisfactionWithCustomerService: 90,
    easyOfUseOfProduct: 4.5,
    valueForMoney: 4.2,
    issuesEncountered: 10,
    supportResolutionTime: 4.2,
    likelihoodOfPurchaseAgain: 8.5,
  },
  {
    name: "Week 4",
    overallSatisfaction: 4.1,
    likelyToRecommend: 8.6,
    satisfactionWithCustomerService: 87,
    easyOfUseOfProduct: 4.2,
    valueForMoney: 4.0,
    issuesEncountered: 13,
    supportResolutionTime: 3.9,
    likelihoodOfPurchaseAgain: 8.2,
  },
  {
    name: "Total Avg",
    overallSatisfaction: 4.18,
    likelyToRecommend: 8.68,
    satisfactionWithCustomerService: 87.5,
    easyOfUseOfProduct: 4.35,
    valueForMoney: 4.08,
    issuesEncountered: 12.5,
    supportResolutionTime: 3.98,
    likelihoodOfPurchaseAgain: 8.28,
  },
];

const QuestionDataPage = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-10 pt-10 mb-10 bg-kpmg-blue">
      <h3 className="w-full text-white uppercase text-3xl text-center">
        Question Data
      </h3>
      <div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Overall Satifaction (1-5)</h3>
          <BarChart
            width={500}
            height={250}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="overallSatisfaction" fill="#00B8F5" />
          </BarChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Likely To Recommend (1-10)</h3>
          <LineChart
            width={500}
            height={250}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="likelyToRecommend"
              stroke="#00B8F5"
            />
          </LineChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Satisfaction with Customer Service - %</h3>
          <BarChart
            width={500}
            height={250}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="satisfactionWithCustomerService" fill="#00B8F5" />
          </BarChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Easy of Use of Product (1-5)</h3>
          <LineChart
            width={500}
            height={250}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="easyOfUseOfProduct"
              stroke="#00B8F5"
            />
          </LineChart>
        </div>
      </div>
      <div className="md:mt-20">
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Value For Money (1-5)</h3>
          <LineChart
            width={500}
            height={250}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="valueForMoney" stroke="#00B8F5" />
          </LineChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Issues Encountered - %</h3>
          <BarChart
            width={500}
            height={250}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="issuesEncountered" fill="#00B8F5" />
          </BarChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Support Resolution Time (1-5)</h3>
          <BarChart
            width={500}
            height={250}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="supportResolutionTime" fill="#00B8F5" />
          </BarChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Likelihood Of Purchase Again (1-10)</h3>
          <LineChart
            width={500}
            height={250}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="likelihoodOfPurchaseAgain"
              stroke="#00B8F5"
            />
          </LineChart>
        </div>
      </div>
    </section>
  );
};

export default QuestionDataPage;
