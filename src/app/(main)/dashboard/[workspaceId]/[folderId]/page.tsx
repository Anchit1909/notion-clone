export const dynamic = "force-dynamic";

import React from "react";
// import QuillEditor from '@/components/quill-editor/quill-editor';
// import { getFolderDetails } from '@/lib/supabase/queries';
import { redirect } from "next/navigation";

const Folder = async ({ params }: { params: { folderId: string } }) => {
  return (
    <div className="relative ">
      <p>Folder</p>
    </div>
  );
};

export default Folder;
