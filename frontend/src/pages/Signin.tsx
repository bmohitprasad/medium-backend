import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"


export const Signin = () => {
    return <div>
        <div className="col-span-1 lg:col-span-2">
        <div>
                <Auth type="signin"/>
            </div>
            <div className="col-span-1 lg:col-span-2">
                <Quote/>
            </div>
            
        </div>
        
    </div>
}
