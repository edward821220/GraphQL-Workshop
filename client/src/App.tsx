import { useQuery } from "@apollo/client";
import { gql } from "./__generated__/gql";

// TODO 1 - Define GET_COMPANY gql
// const GET_COMPANY = gql(`query`);

// TODO 4 - Define UPDATE_EMPLOYEE gql

function App() {
  // TODO 2 - use GET_COMPANY gql to fetch data
  // const { loading, error, data } = useQuery();
  // TODO 5 - use UPDATE_EMPLOYEE gql to update data and set the fn to be called when button is clicked, render the updated status in the UI

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  return (
    <main className="max-w-6xl mx-auto py-6">
      <h1 className="text-center text-6xl font-bold">Companies List</h1>
      {/* TODO 3 - Render data */}
      <ul>
        <li>公司名稱：</li>
        <li>股價：</li>
        <li>市值：</li>
        <li>員工人數：</li>
        <li>
          員工列表：
          <div>姓名：(已更新：)</div>
        </li>
      </ul>
      <button
        onClick={() => {}}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8"
      >
        Update
      </button>
    </main>
  );
}

export default App;
