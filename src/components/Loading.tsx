import { LoadingCircle, LoadingPage } from "./LoadingStyle";

export default function Loading(){
    return(
        <>
            <LoadingPage>
                <LoadingCircle loadingDot={1}/>
                <LoadingCircle loadingDot={2}/>
                <LoadingCircle loadingDot={3}/>
            </LoadingPage>
        </>
    );
}