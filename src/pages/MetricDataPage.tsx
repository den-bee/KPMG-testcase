import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TMetricData = {
  name: string;
  impressions: number;
  clickThroughRate: number;
  conversions: number;
  conversionRate: number;
  costPerClick: number;
  totalSpend: number;
  newLeads: number;
  engagementRate: number;
};

const data: TMetricData[] = [
  {
    name: "Week 1",
    impressions: 15000,
    clickThroughRate: 3.5,
    conversions: 450,
    conversionRate: 2.0,
    costPerClick: 1.2,
    totalSpend: 5400,
    newLeads: 300,
    engagementRate: 8,
  },
  {
    name: "Week 2",
    impressions: 17500,
    clickThroughRate: 4.0,
    conversions: 580,
    conversionRate: 2.3,
    costPerClick: 1.15,
    totalSpend: 5688,
    newLeads: 350,
    engagementRate: 9,
  },
  {
    name: "Week 3",
    impressions: 20000,
    clickThroughRate: 4.3,
    conversions: 620,
    conversionRate: 2.5,
    costPerClick: 1.1,
    totalSpend: 6200,
    newLeads: 400,
    engagementRate: 8.5,
  },
  {
    name: "Week 4",
    impressions: 18500,
    clickThroughRate: 3.9,
    conversions: 560,
    conversionRate: 2.4,
    costPerClick: 1.18,
    totalSpend: 5886,
    newLeads: 370,
    engagementRate: 8.2,
  },
  {
    name: "Total",
    impressions: 71000,
    clickThroughRate: 3.9,
    conversions: 2210,
    conversionRate: 2.3,
    costPerClick: 1.16,
    totalSpend: 23174,
    newLeads: 1420,
    engagementRate: 8.4,
  },
];

const MetricDataPage = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-10 pt-10 mb-10 bg-kpmg-blue">
      <h3 className="w-full text-white uppercase text-3xl text-center">
        Metric Data
      </h3>
      <div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Impressions</h3>
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
            <Bar dataKey="impressions" fill="#00B8F5" />
          </BarChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Click Through Rate - %</h3>
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
            <Line type="monotone" dataKey="clickThroughRate" stroke="#00B8F5" />
          </LineChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Conversions</h3>
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
            <Bar dataKey="conversions" fill="#00B8F5" />
          </BarChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Conversion Rate - %</h3>
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
            <Line type="monotone" dataKey="conversionRate" stroke="#00B8F5" />
          </LineChart>
        </div>
      </div>
      <div className="md:mt-20">
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Cost Per Click - $</h3>
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
            <Line type="monotone" dataKey="costPerClick" stroke="#00B8F5" />
          </LineChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Total Spend - $</h3>
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
            <Bar dataKey="totalSpend" fill="#00B8F5" />
          </BarChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">New Leads</h3>
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
            <Bar dataKey="newLeads" fill="#00B8F5" />
          </BarChart>
        </div>
        <div className="md:w-fit flex flex-col gap-6 mb-6">
          <h3 className="text-white">Engagement Rate</h3>
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
            <Line type="monotone" dataKey="engagementRate" stroke="#00B8F5" />
          </LineChart>
        </div>
      </div>
    </section>
  );
};

export default MetricDataPage;
