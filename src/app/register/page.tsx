import Image from "next/image";
import Link from "next/link";
import ImageRegister from "public/image-register.png";

const Register = () => {
    return (
        <div className="container mx-auto">
            <div className="sm:w-2/3 md:w-3/4 lg:w-full lg:h-screen flex mx-auto center mt-[50px] lg:mt-0 px-4 lg:px-0">
                <div className="lg:basis-1/2 grow lg:grow-0 lg:flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold text-black mb-9 text-center">
                        Daftar Sekarang!
                    </h1>
                    <form action="#">
                        <div className="w-full lg:w-[400px]">
                            <div className="flex flex-col mb-[15px]">
                                <label
                                    htmlFor="name"
                                    className="text-base font-medium text-black mb-2.5"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-input"
                                    placeholder="Masukkan Nama Lengkap"
                                />
                            </div>
                            <div className="flex flex-col mb-[15px]">
                                <label
                                    htmlFor="username"
                                    className="text-base font-medium text-black mb-2.5"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-input"
                                    placeholder="Masukkan Username Anda"
                                />
                            </div>
                            <div className="flex flex-col mb-[15px]">
                                <label
                                    htmlFor="email"
                                    className="text-base font-medium text-black mb-2.5"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    className="form-input"
                                    placeholder="Masukkan Email Anda"
                                />
                            </div>
                            <div className="flex flex-col mb-[15px]">
                                <label
                                    htmlFor="password"
                                    className="text-base font-medium text-black mb-2.5"
                                >
                                    Password
                                </label>
                                <input
                                    type="text"
                                    name="password"
                                    className="form-input"
                                    placeholder="Masukkan Password Anda"
                                />
                            </div>
                            <div className="flex flex-col mb-[30px]">
                                <label
                                    htmlFor="konfirmasi-password"
                                    className="text-base font-medium text-black mb-2.5"
                                >
                                    Konfirmasi Password
                                </label>
                                <input
                                    type="text"
                                    name="konfirmasi-password"
                                    className="form-input"
                                    placeholder="Masukkan Konfirmasi Password"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full text-base font-semibold text-white rounded-full bg-primary py-2.5"
                                >
                                    Daftar
                                </button>
                            </div>
                        </div>
                    </form>
                    <p className="mt-4 text-base text-black text-center">
                        Sudah punya akun?{" "}
                        <Link
                            href={"/login"}
                            className="text-primary font-medium ml-1 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
                <div className="hidden lg:block h-full lg:basis-1/2">
                    <Image
                        src={ImageRegister}
                        alt="image"
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
export default Register;
