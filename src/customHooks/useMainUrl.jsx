function useMAinUrl(){
     const localUrl= `http://localhost:3000`
     const cloudUrl = `https://job-posting-backend-tau.vercel.app`
     const url = cloudUrl
     return url
}


export  const Url = () => ({ URL : useMAinUrl()})