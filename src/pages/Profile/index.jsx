import { useEffect } from "react"
import useUser from "../../hooks/useUser";

const Profile = () => {

    const {profile} = useUser()

    useEffect(() => {
        profile(token)
    }, []);

  return (
    <div>
      profile
    </div>
  )
}

export default Profile
