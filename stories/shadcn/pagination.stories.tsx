import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../src";
  
  export function PaginationDemo() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious  href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink  href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink  href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext  href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }


  import type { Meta, StoryObj } from "@storybook/react-vite";


const meta: Meta<typeof PaginationDemo> = {
  component: PaginationDemo,
};

export default meta;

export const Default: StoryObj<typeof PaginationDemo> = {
  args: {},
};

  