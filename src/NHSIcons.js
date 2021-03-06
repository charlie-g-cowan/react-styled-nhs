//MIT License
//
// Copyright (c) 2019 NHS Digital
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import React from "react";
// import 'nhsuk-frontend/dist/nhsuk.min.js';
import 'nhsuk-frontend/packages/nhsuk.scss';

export function NHSVectorClose() {
    return <svg className="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
    </svg>;
}

export function NHSVectorChevronRight() {
    return <svg className="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" aria-hidden="true">
        <path
            d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
    </svg>;
}

export function NHSVectorSearch() {
    return <svg className="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
    </svg>;
}

export function NHSVectorChevronLeft() {
    return <svg className="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                aria-hidden="true">
        <path
            d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
    </svg>;
}

export function NHSVectorArrowRightCircle() {
    return <svg className="nhsuk-icon nhsuk-icon__arrow-right-circle"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                aria-hidden="true">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
            d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>;
}
