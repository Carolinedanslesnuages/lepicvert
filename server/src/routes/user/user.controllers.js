import user from './models/user'

export async function signUp (req, res) {
const user = {
    fisrtName, 
    lastName,
    birthday,
    email, 
    password, 
    signUpDate, 
    status } = req.body.user

    if (user) {
        await createUser(user)
        return res.status(200).json({
            success: true,
            message: 'Utilisateur enregistrer'
        })
        }
        return res.status(500).json({
            success: false,
            message:'Oups une erreur est survenu'
        })
    }

