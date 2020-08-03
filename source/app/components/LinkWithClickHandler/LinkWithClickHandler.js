/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

import React, { forwardRef, useCallback } from "react";
import Link from "next/link";

const WrappedLink = forwardRef(function WrappedLink(
  { customClick, onClick, ...rest },
  ref
) {
  const handleClick = useCallback(
    (e) => {
      customClick(e);
      onClick(e);
    },
    [customClick, onClick]
  );

  return <a ref={ref} {...rest} onClick={handleClick} />;
});

export default function LinkWithClickHandler({ onClick, children, ...rest }) {
  return (
    <Link {...rest} passHref>
      <WrappedLink customClick={onClick}>{children}</WrappedLink>
    </Link>
  );
}