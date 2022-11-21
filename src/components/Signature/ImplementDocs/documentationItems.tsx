export default [
  {
    title: 'Apple OSX Mail App 📫',
    content: (
      <ol>
        <li>Fill the data and copy the signature using the button</li>
        <li>
          Open Mail app, go to Main &gt; Preferences &gt; Signatures and choose
          the desired mail account
        </li>
        <li>Add a new one signature using the plus button.</li>
        <li>
          Uncheck the <em>Always match my default message font option</em>. And
          paste the clipboard content in the box. The preview can be inaccurate,
          do not worry...
        </li>
        <li>
          Close Preferences, create a new email and use the newly created
          signature. Confirm everything shows up as expected.
        </li>
      </ol>
    ),
  },
  {
    title: 'iOS Mail App 📱',
    content: (
      <ol>
        <li>Fill the data and copy the signature using the button</li>
        <li>Navigate to Settings &gt; Mail &gt; Signature</li>
        <li>
          Paste the content from the clipboard and right after click on the Undo
          button to avoid the automatic formatting.
        </li>
        <li>
          Close Preferences, create a new email and use the newly created
          signature. Confirm everything shows up as expected.
        </li>
      </ol>
    ),
  },
  {
    title: 'Microsoft Outlook ✉️',
    content: (
      <ol>
        <li>Fill the data and copy the signature using the button</li>
        <li>
          In Outlook 2019/2016/2013/2010, click File to go to the Backstage
          view.
        </li>
        <li>Go to Options.</li>
        <li>
          Click the Mail tab and then Signatures in the Compose messages
          section.
        </li>
        <li>Create a new signature by clicking the New button.</li>
        <li>
          Paste the copied signature into the Edit signature section (Ctrl + V).
        </li>
        <li>Click OK.</li>
      </ol>
    ),
  },
  {
    title: 'GMail',
    content: (
      <ol>
        <li>Fill the data and copy the signature using the button</li>
        <li>Log in to Gmail/G Suite.</li>
        <li>
          Click the gear icon in the upper-right corner and choose See all
          settings.
        </li>
        <li>
          On the General tab (default), scroll down to the Signature section.
        </li>
        <li>
          Click the Create new button to add a new email signature or the Edit
          button if you want to replace an existing signature.
        </li>
        <li>
          Paste the copied signature in the Edit signature section (Ctrl + V).
        </li>
        <li>
          (Optional) Choose whether to insert the signature automatically for
          new emails and replies and forwards.
        </li>
        <li>Scroll down and click Save changes.</li>
      </ol>
    ),
  },
]
