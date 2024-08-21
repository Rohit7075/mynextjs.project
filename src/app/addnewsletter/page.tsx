import dynamic from "next/dynamic";

const CKEditorComponent = dynamic(() => import('@/app/CKEditorComponents/page'), { 
    ssr: false 
  });
export default function AddNewsletter() {
    
    return (
        <div>
            <CKEditorComponent />
        </div>
    );
}