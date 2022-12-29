import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="text-center" id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoKESfJyOyx6gpGPBD-ALk0QrVn1KEOLbyQ&usqp=CAU" alt="" />
        </div>
    );
}