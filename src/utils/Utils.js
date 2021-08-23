export const capitalize = (str) => {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
} 

export const sendMail = ()=>{
    window.location.href='mailto:wilder_eduardo85@hotmail.com'
}