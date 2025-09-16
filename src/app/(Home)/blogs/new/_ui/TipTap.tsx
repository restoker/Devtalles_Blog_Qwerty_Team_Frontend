'use client';
import React, { useCallback, useEffect } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { UseFormSetValue } from 'react-hook-form';
import { BoldIcon, ItalicIcon, StrikethroughIcon } from '@heroicons/react/24/outline';
import { Code2, Heading1, Heading2, Heading3, ImagePlusIcon, List, ListOrdered, Redo, TextAlignCenter, Undo } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
const TipTap = ({ value, setValue }: { value: string, setValue: UseFormSetValue<any> }) => {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                orderedList: {
                    HTMLAttributes: {
                        class: 'list-decimal pl-4'
                    }
                },
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc pl-4'
                    }
                },
            }),
            Image.configure({
                inline: true,
                HTMLAttributes: {
                    class: 'w-full h-[300px] object-cover'
                }
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        editorProps: {
            attributes: {
                class: 'block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-40 0 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:py-1.5 sm:text-sm sm:leading-6 bg-transparent dark:text-gray-200 px-4'
            }
        },
        content: value,
        onUpdate: ({ editor }) => {
            const content = editor.getHTML();
            setValue('description', content, {
                shouldValidate: true,
                shouldDirty: true,
                // shouldTouch: true,
            });
            // onChange={({ target }) => setValue('description', target.value)}
        },
    });


    const addImage = useCallback(() => {
        const url = window.prompt('URL');
        if (url) {
            editor?.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    useEffect(() => {
        if (editor?.isEmpty) editor.commands.setContent(value);
    }, [value]);

    return (
        <>
            <div className='flex flex-col gap-2'>

                {editor ?
                    <div className='border rounded-md border-opacity-20 bg-zinc-700'>
                        <Toggle
                            pressed={editor.can().undo()}
                            onPressedChange={() => editor.chain().focus().undo().run()}
                            size={'sm'}
                            aria-label="Toggle undo"
                        >
                            <Undo />
                        </Toggle>
                        <Toggle
                            pressed={editor.can().redo()}
                            onPressedChange={() => editor.chain().focus().redo().run()}
                            size={'sm'}
                            aria-label="Toggle redo"
                        >
                            <Redo />
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('code')}
                            onPressedChange={() => editor.chain().focus().toggleCode().run()}
                            size={'sm'}
                            aria-label="Toggle code"
                        >
                            <Code2 />
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('bold')}
                            onPressedChange={() => editor.chain().focus().toggleBold().run()}
                            size={'sm'}
                            aria-label="Toggle bold"

                        >
                            <BoldIcon className="h-4 w-4" />
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('italic')}
                            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                            size={'sm'}
                            aria-label="Toggle italic"
                        >
                            <ItalicIcon className="h-4 w-4" />
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('strike')}
                            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
                            size={'sm'}
                        // aria-label="Toggle bold"

                        >
                            <StrikethroughIcon className="h-4 w-4" />
                        </Toggle>
                        <Toggle
                            style={{}}
                            pressed={editor.isActive('orderedList')}
                            onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
                            size={'sm'}
                        >
                            <ListOrdered className="h-4 w-4" />
                        </Toggle>
                        {/* <Toggle
                            style={{}}
                            pressed={editor.isActive('orderedList')}
                            onPressedChange={() => editor.chain().focus().a().run()}
                            size={'sm'}
                        >
                            <ListOrdered className="h-4 w-4" />
                        </Toggle> */}
                        <Toggle
                            pressed={editor.isActive('bulletList')}
                            onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
                            size={'sm'}
                        // aria-label="Toggle bold"

                        >
                            <List className="h-4 w-4" />
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('bulletList')}
                            onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                            size={'sm'}
                            aria-label="Toggle bold"

                        >
                            <Heading1 className="h-4 w-4" />
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('heading', { level: 2 })}
                            onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            size={'sm'}
                            aria-label="Toggle bold"
                        >
                            <Heading2 className="h-4 w-4" />
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('heading', { level: 2 })}
                            onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                            size={'sm'}
                            aria-label="Toggle bold"
                        >
                            <Heading3 className="h-4 w-4" />
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('heading', { level: 2 })}
                            onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                            size={'sm'}
                            aria-label="Toggle bold"
                        >
                            <p className='h-4 w-4'>P</p>
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('image')}
                            onPressedChange={() => editor.chain().focus().toggleTextAlign('center').run()}
                            size={'sm'}
                            aria-label="Toggle image"
                        >
                            <TextAlignCenter className="h-4 w-4" />
                        </Toggle>
                        <Toggle
                            pressed={editor.isActive('image')}
                            onPressedChange={() => addImage()}
                            size={'sm'}
                            aria-label="Toggle image"
                        >
                            <ImagePlusIcon className="h-4 w-4" />
                        </Toggle>
                    </div>
                    : null}
                <EditorContent className='bg-zinc-800' editor={editor} />
                {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
            <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu> */}
            </div>
        </>
    )
}

export default TipTap