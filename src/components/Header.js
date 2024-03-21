const Header = () => {
    return (
        <div class="flex justify-between m-4">
            <h1 class="text-burntorange font-spacemono font-bold text-3xl">
                Retrosquares
            </h1>

            <input type="text" placeholder="Search" class="border-2"></input>

            <button class="bg-rose-600 text-zinc-50">
                Login/Logout
            </button>
        </div>
    )
}

export default Header