import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm()
    const handleLogin = (data) => {
        console.log(data);
    }
    return (
        <section>

            <div className="flex justify-center min-h-[80%] py-auto bg-gradient-to-t from-cyan-400 to-indigo-500 ">
                <div className="rounded-lg my-5   flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered text-black" {...register("email", { required: true, })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered text-black" {...register("password", { required: "Password is minimum 6 charecteres", minLength: 6 })} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-gradient-to-t from-cyan-400 to-indigo-500" type="submit" value="Login " />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;