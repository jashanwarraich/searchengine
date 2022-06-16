import React from 'react';

export const Footer = () => (
  <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200 ">
    © 2022 Searcher, Inc.&emsp;|&emsp;
    <a
      href="https://www.linkedin.com/in/jashanwarraich/"
      target="_blank"
      rel="noopener noreferrer"
      class="no-underline hover:underline"
    >
      <img src="/images/li.png" className="h-6 inline" alt="LinkedIn" />
      /jashanwarraich
    </a>
    &emsp;|&emsp;
    <a
      href="https://github.com/jashanwarraich"
      target="_blank"
      rel="noopener noreferrer"
      class="no-underline hover:underline"
    >
      <img src="/images/git.png" className="h-6 inline" alt="LinkedIn" />
      /jashanwarraich
    </a>
  </div>
);
