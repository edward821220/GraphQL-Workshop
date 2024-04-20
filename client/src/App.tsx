import { useQuery } from "@apollo/client";
import { gql } from "./__generated__/gql";

const GET_COMPANIES = gql(
  `query GetCompanies{
    companies {
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

const GET_COMPANY = gql(
  `query GetCompany($id: ID!){
    company(id: $id) {
      id
      name
    }
  }
`
);

function App() {
  // const { loading, error, data } = useQuery(GET_COMPANIES);
  const { loading, error, data } = useQuery(GET_COMPANY, {
    variables: { id: "2" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return (
    <main className="max-w-6xl mx-auto py-6">
      <h1 className="text-center text-6xl font-bold">Companies List</h1>
      <ul>
        {/* {data?.companies.map((company) => (
          <li key={company.id}>
            <div>{company.name}</div>
          </li>
        ))} */}
      </ul>
    </main>
  );
}

export default App;
