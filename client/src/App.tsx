import { useMutation, useQuery } from "@apollo/client";
import { gql } from "./__generated__/gql";

const GET_COMPANY = gql(
  `query GetCompany($id: ID!){
    company(id: $id) {
      id
      name
      stock_price
      outstanding_shares
      employees {
        id
        name
        updated
      }
    }
  }
`
);

const UPDATE_EMPLOYEE = gql(`
  mutation UpdateEmployee($companyId: ID!, $employeeId: ID!) {
    updateEmployee(companyId: $companyId, employeeId: $employeeId) {
      id
      name
      updated
    }
  }
`);

function App() {
  const { loading, error, data } = useQuery(GET_COMPANY, {
    variables: { id: "2" },
  });
  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE, {
    variables: { companyId: "2", employeeId: "2" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <main className="max-w-6xl mx-auto py-6">
      <h1 className="text-center text-6xl font-bold">Companies List</h1>
      <ul>
        <li>公司名稱：{data?.company?.name}</li>
        <li>股價：{data?.company?.stock_price}</li>
        <li>
          市值：
          {((data?.company?.outstanding_shares || NaN) / 1000) *
            (data?.company?.stock_price || NaN)}
        </li>
        <li>員工人數：{data?.company?.employees?.length}</li>
        <li>
          員工列表：
          {data?.company?.employees?.map((employee) => (
            <div key={employee.id}>
              姓名：{employee.name} (已更新：{employee.updated ? "是" : "否"})
            </div>
          ))}
        </li>
      </ul>
      <button
        onClick={() => updateEmployee()}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8"
      >
        Update
      </button>
    </main>
  );
}

export default App;
