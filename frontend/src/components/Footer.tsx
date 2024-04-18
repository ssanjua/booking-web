const Footer = () => {
  return (
    <div className="bg-blue-600 py-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex flex-col mf:flex-row md:items-center">
              <span className="text-sm  font-bold tracking-tight">
                  bookeando.com 🛫</span>
              <span className="block mt-1 md:inline md:ml-4 text-sm">
                  made with 🤍 by ssanjua </span>
            </div>
            <div className="text-sm flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms of service</span>        
            </div>
        </div>
    </div>
  )
}

export default Footer;