export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen m-6 gap-4 ">
      <div>
        <h1 className="text-5xl m-4">GitDev</h1>
        <p>Explore Developer Portfolio</p>
      </div>
      <div>
        <form>
          <label htmlFor="username">Enter Username</label>
          <input
            type="text"
            id="username"
            className="border border-red-500 rounded-2xl  m-2 text-center"
            placeholder="Github username..."
          />
          <button className="bg-red-500 text-white rounded-3xl p-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
