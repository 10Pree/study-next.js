export async function GET( request,{ params }){
    console.log("test")
    return Response.json({
        id: params.id,
        name: "Nonthanan"
    })
}