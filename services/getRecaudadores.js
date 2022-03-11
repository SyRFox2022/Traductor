export default async function Get_recaudadores() {
    try {
        const response = await fetch('http://localhost:5000/recaudadores');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}