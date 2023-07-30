import { useEffect } from "react"
import useUser from "../../hooks/useUser";

const Profile = () => {

    const {userProfile, getProfile} = useUser()

    useEffect(() => {
        getProfile()
    }, []);

  return (

      userProfile && (
       <div>
         <h1>Nombre: {userProfile.name}</h1>
          <hr />
          <h1>Email: {userProfile.email}</h1>
       </div>
      )


    
  )
}

export default Profile
