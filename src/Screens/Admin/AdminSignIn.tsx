import SignInForm from "./components/SignInForm";


export default function AdminSignIn() {
    document.title = 'Geesh - Admin Login'
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-black'>
            <main className="w-[90%] h-full  flex justify-center items-center">
                <SignInForm />
            </main>
        </div>
    )
}
