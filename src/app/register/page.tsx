const Login = () => {
  return (
    <div className="w-screen h-screen bg-blue-400 flex">
      <div className="left flex-[0_0_564px] border h-full">bagian left</div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-[36px] font-[500] text-white mb-[40px]">
          Daftar Sekarang!
        </h1>
        <form action="#">
          <div className="flex flex-col mb-[18px]">
            <label htmlFor="name" className="text-[20px] font-[500] text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan nama lengkap Anda "
            />
          </div>
          <div className="flex flex-col mb-[18px]">
            <label
              htmlFor="username"
              className="text-[20px] font-[500] text-white"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan nama lengkap Anda "
            />
          </div>
          <div className="flex flex-col mb-[18px]">
            <label
              htmlFor="email"
              className="text-[20px] font-[500] text-white"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              className="text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan alamat email Anda "
            />
          </div>
          <div className="flex flex-col mb-[40px]">
            <label
              htmlFor="password"
              className="text-[20px] font-[500] text-white"
            >
              Password
            </label>
            <input
              type="text"
              name="password"
              className="text-[16px] text-[#BFBFBF] py-4 pl-[30px] pr-[51px] rounded-full w-[400px] outline-none"
              placeholder="Masukkan password  Anda "
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-[20px] font-[600] text-white rounded-full w-full bg-[#FF872E] p-[12px_149px_13px_150px]"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
