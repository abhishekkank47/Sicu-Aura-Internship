import bcrypt from 'bcrypt'

export const hashPassword = async (password)=>{
    try {
        const passwordHashed = await bcrypt.hash(password,10)
        return passwordHashed
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword = async(password,passwordHashed)=>{
    return bcrypt.compare(password,passwordHashed)
}
