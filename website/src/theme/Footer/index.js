/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import styles from './styles.module.css';

function BlogButton() {
  return <a class="button blog-button" href="https://visly.app/blog">
    Read our blog
    </a>
}

function Footer() {

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h1>Built by Visly</h1>
        <p>Visly is amazing and we build cool shit. Read more about it in our blog. Visly is amazing and we build cool shit. Read more about it in our blog.</p>
      </div>
      <BlogButton/>
    </footer>
  );
}

export default Footer;
