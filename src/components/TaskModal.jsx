"use client";

import { CheckShape } from "@gravity-ui/icons";
import {
  Button, Input, Label, ListBox, Modal,
  Select, Surface, TextField
} from "@heroui/react";

export function TaskModal({ CreateTask }) {
  return (
    <Modal>
      <Button variant="secondary">Add Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CheckShape className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Create Task</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={CreateTask} className="flex flex-col gap-4">

                  <TextField className="w-full" name="title" type="text">
                    <Label>Task Name</Label>
                    <Input placeholder="e.g. Design landing page" />
                  </TextField>

                  <div className="flex gap-3">
                    <Select className="flex-1" name="priority" placeholder="Select priority">
                      <Label>Priority</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="high" textValue="High">
                            High
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="medium" textValue="Medium">
                            Medium
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="low" textValue="Low">
                            Low
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <Select className="flex-1" name="status" placeholder="Select status">
                      <Label>Status</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="pending" textValue="Pending">
                            Pending
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="in-progress" textValue="In Progress">
                            In Progress
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="completed" textValue="Completed">
                            Completed
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  <TextField className="w-full" name="assignee" type="text">
                    <Label>Assignee</Label>
                    <Input placeholder="Enter assignee name" />
                  </TextField>

                  <TextField className="w-full" name="description">
                    <Label>Description</Label>
                    <Input placeholder="Add a short description..." />
                  </TextField>

                  <div className="flex gap-3 pt-1">
                    <Button slot="close" variant="secondary" className="flex-1">
                      Cancel
                    </Button>
                    <Button slot="close" type="submit" className="flex-1">
                      Create Task
                    </Button>
                  </div>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}