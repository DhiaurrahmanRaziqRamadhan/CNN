const Dashboard = () => {
  const members = [
    {name:'Regita Rose Prameswari',npm:'2017051017'},
    {name:'Tasya Azzahra Putri',npm:'2117051043'},
    {name:'Dhiaurrahman Raziq Ramadhan',npm:'2117051048'},
    {name:'Ferli Malkan Amien',npm:'2117051050'},
  ] 

  return (
    <div className="dark:text-white">
      <div className="my-3 ">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <p>CNN / Dashboard</p>
      </div>
      <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-4 min-h-full flex flex-col duration-100">
        <h1>Selamat Datang di Aplikasi Kami</h1>
        <p>Sistem pengenalan wajah menggunakan CNN</p>
        <ul>
          {members?.map((member, i) => (
            <li key={i}>{member?.name} {member?.npm}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard